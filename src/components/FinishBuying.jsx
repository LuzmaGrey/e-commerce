import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useAuth } from "../context/AuthContext";
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
    errors.name = "The 'Name' field is required";
  } else if (!regexNameSurname.test(form.name.trim())) {
    errors.name = "The 'Name' field accepts only letters and blanks.";
  }
  if (!form.surname.trim()) {
    errors.surname = "The 'Last Name' field is required";
  } else if (!regexNameSurname.test(form.surname.trim())) {
    errors.surname = "The 'Last name' field accepts only letters and blanks.";
  }
  if (!form.email.trim()) {
    errors.email = "The 'Email' field is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The 'Email' field is incorrect";
  }
  if (form.email !== form.emailr) {
    errors.emailr = "Fields do not match";
  }
  if (!form.phone.trim()) {
    errors.phone = "The 'Mobile' field is required";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "The 'Mobile' field is incorrect";
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
  const [response, setResponse] = useState(null); // Will store the Order ID
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      setForm((prev) => ({
        ...prev,
        email: currentUser.email,
        emailr: currentUser.email,
      }));
    }
  }, [currentUser, setForm]);

  const generateOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    let order = {};
    order.buyer = form;
    order.total = totalPrice;

    if (currentUser) {
      order.buyer.userId = currentUser.uid;
    }

    order.items = state.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.nombre;
      const price = cartItem.precio * cartItem.cantidad;

      return { id, name, price };
    });

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    
    try {
      const resp = await addDoc(queryCollection, order);
      setResponse(resp.id);
      setForm(initialForm);
      emptyCart();
      toast.success(`Purchase successful!`);

      // Update stock
      const queryCollectionStock = collection(db, "productos");
      const queryUpdateStock = query(
        queryCollectionStock,
        where(
          documentId(),
          "in",
          state.map((it) => it.id)
        )
      );

      const batch = writeBatch(db);
      const stockResp = await getDocs(queryUpdateStock);
      stockResp.docs.forEach((res) => {
        batch.update(res.ref, {
          stock:
            res.data().stock -
            state.find((item) => item.id === res.id).cantidad,
        });
      });
      await batch.commit();

    } catch (err) {
      console.log(err);
      toast.error("There was an error generating your order.");
    } finally {
      setLoading(false);
    }
  };

  if (response) {
    return (
      <section id="contact" className="contact">
        <div className="section-title">
          <h2>Order Confirmed!</h2>
        </div>
        <div className="confirmed-container">
          <div className="confirmed-icon">✅</div>
          <h3>Thank you for your purchase!</h3>
          <p>Your order number is:</p>
          <span className="order-id">{response}</span>
          <br /><br />
          <Link to="/">
            <button className="button-fw">Back to Pokédex</button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Add your info</h2>
      </div>
      <div className="container">
        
        {!currentUser && (
          <div className="login-suggestion">
            <p>Want to check out faster?</p>
            <Link to="/login">
              <button className="login-suggestion-btn">Log in to your account</button>
            </Link>
            <p className="or-divider">Or continue as guest below:</p>
          </div>
        )}

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
              <span className="form-error">{errors.name}</span>
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
              <span className="form-error">{errors.surname}</span>
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
              <span className="form-error">{errors.phone}</span>
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
              readOnly={!!currentUser}
              required
            />
            {errors.email && (
              <span className="form-error">{errors.email}</span>
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
              readOnly={!!currentUser}
              required
            />
            {errors.emailr && (
              <span className="form-error">{errors.emailr}</span>
            )}
          </div>
          <span className="spanForm">
            We will use your information to inform you about the delivery *
          </span>
          <button className="button-fw" disabled={loading || Object.keys(errors).length > 0}>
            {loading && <BiLoaderCircle />} Finish my order
          </button>
        </form>
      </div>
    </section>
  );
};
export default FinishBuying;
