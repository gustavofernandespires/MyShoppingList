import EventManager from "../lib/EventManager";

export const toastEventManager = new EventManager();

export default function toast({ text, type, duration }) {
  toastEventManager.emit("addtoast", { type, text, duration });
}
