// src/components/Sidebar.jsx
const Sidebar = ({ groupNames, selectedGroup, onSelectGroup }) => {
    return (
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">UI Categories</h2>
        <ul className="space-y-2">
          {groupNames.map((group) => (
            <li
              key={group}
              className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-700 ${
                selectedGroup === group ? "bg-gray-700 font-semibold" : ""
              }`}
              onClick={() => onSelectGroup(group)}
            >
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </li>
          ))}
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  