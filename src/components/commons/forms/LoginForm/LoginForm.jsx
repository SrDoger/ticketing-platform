import { useForm } from "react-hook-form";
import './LoginForm.css'
const LoginForm = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({});

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="container-left">
      <h2>Login</h2>

          <div>
              <label>Email</label>
              <input
                required
                multiple 
                placeholder="example@gmail.com" type="text"
                {...register('email', {pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}/>

              {errors.email?.type === 'pattern'}
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
            
            {errors.password?.type === 'required'}
            {errors.password?.type === 'minLength'}
          </div>
          <div>
            <input type="submit" value="Enviar" />
          </div>
          </div>
    </form>
    )
}

export default LoginForm;