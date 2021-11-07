
import { Select } from "../components/Countries";
import { useForm } from "react-hook-form";
import styles from './App.module.css';
import { useAlert } from 'react-alert'
import { useRef } from "react";
import { sendData } from "../helpers/sendData";

function App() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const alert = useAlert();
  const input = useRef();

  const onSubmit = (data) => {
    sendData(data)
      .then(res => {
        alert.success('Se ha registrado tu respeusta!')
        reset()
      })
  }

  const onInvalid = () => {
    alert.error('Necesitas ingresar tu nombre')
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.form_login}>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)} className={styles.form_container}>
              <h1 className={styles.title}>Formulario</h1>
              <input placeholder="Nombre" ref={input} type="text" {...register("name", { required: true, maxLength: 80 })} className={"name" in errors ? styles.error : ''} />
              <Select name="country" register={register} />

              <button className={styles.button}>
                Guardar
              </button>

            </form>
          </div>
          <div className={styles.imagen}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
