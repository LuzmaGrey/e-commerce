import { useContext, useState } from "react";

import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

import { BiLoaderCircle } from "react-icons/bi";

import toast, { Toaster } from "react-hot-toast";

import AppContext from "../context/AppContext";
import useForm from "../hooks/useForm";
import "../styles/Form.scss";

const initialForm = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  emailr: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexNameSurname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

  if (!form.name.trim()) {
    errors.name = toast.error("Name' field is required");
  } else if (!regexNameSurname.test(form.name.trim())) {
    errors.name = toast.error(
      "The 'Name' field accepts only letters and blanks."
    );
  }
  if (!form.surname.trim()) {
    errors.surname = toast.error("The 'Last Name' field is required");
  } else if (!regexNameSurname.test(form.surname.trim())) {
    errors.surname = toast.error(
      "The 'Last name' field accepts only letters and blanks."
    );
  }
  if (!form.email.trim()) {
    errors.email = toast.error("Email' field is required");
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = toast.error("Email' field is incorrect");
  }
  if (form.email !== form.emailr) {
    errors.emailr = toast.error("Fields do not match");
  }
  if (!form.phone.trim()) {
    errors.phone = toast.error("The 'Mobile' field is required");
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = toast.error("The 'Mobile' field is incorrect");
  }

  return errors;
};

const FinishBuying = () => {
  const { state, totalPrice, emptyCart } = useContext(AppContext);
  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // <-- GENERATE ORDER
  const generateOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    let order = {};
    order.buyer = form;
    order.total = totalPrice();

    order.items = state.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.nombre;
      const price = cartItem.precio * cartItem.cantidad;

      return { id, name, price };
    });
    // creación de un documento
    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    await addDoc(queryCollection, order)
      .then((resp) => {
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() => setResponse(false), 5000);
        toast.success(`Your purchase ${resp.id} was successful`);
        setTimeout(() => emptyCart(), 6500);
      })
      .catch((err) => console.log(err))
      .finally(() =>
        toast("Thank you for your purchase!", {
          icon: "👏",
        })
      );

    const queryCollectionStock = collection(db, "productos");

    const queryUpdateStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        state.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock).then((resp) =>
      resp.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            res.data().stock -
            state.find((item) => item.id === res.id).cantidad,
        })
      )
    );

    batch.commit();
  }; // GENERATE ORDER -->

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Add your info</h2>
      </div>
      <div className="container">
        <form onSubmit={generateOrder} className="contactForm">
          <div className="form-container">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Name(s) *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.name}
              required
            />
            {errors.name && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <div className="form-container">
            <input
              type="text"
              name="surname"
              className="form-input"
              placeholder="Last name(s) *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.surname}
              required
            />
            {errors.surname && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <div className="form-container">
            <input
              type="phone"
              className="form-input"
              name="phone"
              placeholder="Phone number *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.phone}
              required
            />
            {errors.phone && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <div className="form-container">
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.email}
              required
            />
            {errors.email && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <div className="form-container">
            <input
              type="email"
              className="form-input"
              name="emailr"
              placeholder="Confirm Email *"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.emailr}
              required
            />
            {errors.emailr && (
              <Toaster position="bottom-center" reverseOrder={false} />
            )}
          </div>
          <span className="spanForm">
            We will use your information to inform you about the delivery *
          </span>
          <button className="button-fw" disabled={loading}>
            {loading && <BiLoaderCircle />} Finish my order
          </button>
        </form>
        {response && <Toaster position="bottom-center" />}
      </div>
    </section>
  );
};
export default FinishBuying;
