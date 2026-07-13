import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
} from "react";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";
import "./Alert.css";

const AlertContext = createContext(null);

let idCounter = 0;

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);
  const timers = useRef({});

  const removeAlert = useCallback((id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
    }
  }, []);

  const showAlert = useCallback(
    (message, type = "success", duration = 4000) => {
      const id = ++idCounter;
      setAlerts((prev) => [...prev, { id, message, type }]);
      timers.current[id] = setTimeout(() => removeAlert(id), duration);
    },
    [removeAlert],
  );

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <div className="alert-container">
        {alerts.map((a) => (
          <AlertToast key={a.id} alert={a} onClose={() => removeAlert(a.id)} />
        ))}
      </div>
    </AlertContext.Provider>
  );
}

function AlertToast({ alert, onClose }) {
  const icons = {
    success: <CheckCircle2 size={20} />,
    error: <XCircle size={20} />,
    info: <Info size={20} />,
  };

  return (
    <div className={`alert-toast alert-${alert.type}`}>
      <span className="alert-icon">{icons[alert.type] || icons.info}</span>
      <span className="alert-message">{alert.message}</span>
      <button className="alert-close" onClick={onClose} aria-label="Close">
        <X size={16} />
      </button>
    </div>
  );
}

export function useAlert() {
  const ctx = useContext(AlertContext);
  if (!ctx) {
    throw new Error("useAlert must be used inside <AlertProvider>");
  }
  return ctx.showAlert;
}
