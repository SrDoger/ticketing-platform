import { useForm } from "react-hook-form";
import './RegisterForm.css'

const RegisterForm = () => {
  
  







  const { register, formState: { errors }, watch, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="container-left">
        <h2>Register</h2>
        <div>
          <label>Nombre</label>
          <input
            maxLength={10}
            type="text"
            {...register('nombre', {
              required: true,
              maxLength: 10
            })}
          />
          {errors.nombre?.type === 'required' && <p>Nombre is required</p>}
          {errors.nombre?.type === 'maxLength' && <p>Nombre must be 10 characters or less</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            required
            placeholder="example@gmail.com"
            type="email"
            {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}
          />
          {errors.email?.type === 'pattern' && <p>Email must be a valid email address</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            required
            minLength={8}
            type="password"
            {...register('password', {
              required: true,
              minLength: 8
            })}
          />
          {errors.password?.type === 'required' && <p>Password is required</p>}
          {errors.password?.type === 'minLength' && <p>Password must be at least 8 characters</p>}
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </div>
    </form>
  )
}

export default RegisterForm;