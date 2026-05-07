import { useState, useCallback } from "react";

const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const handleBlur = useCallback((event) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      const newForm = { ...prevForm, [name]: value };
      setErrors(validateForm(newForm));
      return newForm;
    });
  }, [validateForm]);

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    setForm,
  };
};
export default useForm;
