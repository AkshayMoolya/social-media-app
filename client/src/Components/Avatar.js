export default function Avatar({ size }) {
  let width = "w-12";
  if (size === "lg") {
    width = "w-24 h-24 md:w-36 md:h-36";
  }
  return (
    <div className={`${width} h-12 rounded-full overflow-hidden`}>
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
    </div>
  );
}
