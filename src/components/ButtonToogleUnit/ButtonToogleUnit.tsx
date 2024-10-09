import { useUnit } from "../../hooks/useUnit";

const ButtonToogleUnit = () => {
  const { celcius, toogleUnit } = useUnit();

  return (
    <div data-testid="button-id" className="bg-zinc-700 rounded-full border border-zinc-800 p-1  items-center justify-between 2xl:transform 2xl:translate-x-9 lg:mr-6">
      <button
        data-testid="celcius-id"
        onClick={toogleUnit}
        className={`${
          celcius
            ? "bg-[#b3dadd] p-1 px-3   rounded-full text-zinc-900  font-bold"
            : "p-1 px-3 text-zinc-200"
        }`}
      >
        °C
      </button>
      <button
        data-testid="fahrenheit"
        onClick={toogleUnit}
        className={`${
          celcius
            ? " text-zinc-200 p-1 px-3"
            : "bg-[#b3dadd] px-3 p-1 rounded-full text-zinc-900  font-bold"
        }`}
      >
        °F
      </button>
    </div>
  );
};

export { ButtonToogleUnit };
