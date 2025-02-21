import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex flex-col items-center space-y-3 p-6 m-6 rounded-lg w-96 bg-white/10 backdrop-blur-lg shadow-lg border border-white/20">
      <ClipLoader color="#3498db" size={50} />
      <p className="text-white font-semibold">Analyzing Resume...</p>
    </div>
  );
}
