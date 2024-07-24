
const AlertButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
    >
      <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
      <span className="block border border-red-600 bg-red-600 px-6 py-2 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
        {props.children}
      </span>
    </button>
  );
};

export default AlertButton;
