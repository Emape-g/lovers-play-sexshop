
import './LoginForm.css';
import { FaTimes } from 'react-icons/fa';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  return (
    <div className="modal-overlay">
      <div className="login-form-container">
        <button className="close-button" onClick={onClose}><FaTimes /></button>
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Entrar</button>
          <p className="forgot-password">
            <a href="/recuperar-contraseña">¿Olvidaste tu contraseña?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;