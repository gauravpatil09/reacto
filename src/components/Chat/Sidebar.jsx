export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#202123] p-3 text-sm">
      <button className="w-full border border-[#565869] rounded-lg p-2 mb-4 hover:bg-[#2a2b32]">
        + New chat
      </button>

      <div className="text-gray-400 mb-2">Today</div>

      <div className="space-y-1">
        <div className="p-2 rounded hover:bg-[#2a2b32] cursor-pointer">
          MERN Chat App
        </div>
        <div className="p-2 rounded hover:bg-[#2a2b32] cursor-pointer">
          UI Clone
        </div>
      </div>
    </aside>
  );
}
