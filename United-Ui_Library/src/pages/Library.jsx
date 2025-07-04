import { useState } from "react";
import {
  groupedUIComponents,
  groupNames,
} from "../components/data/uiLibraryMeta";
import ComponentPreview from "../components/ComponentPreview";
import Sidebar from "../components/Sidebar";

const Library = () => {
  const [selectedGroup, setSelectedGroup] = useState(groupNames[0] || null);

  if (!selectedGroup || !groupedUIComponents[selectedGroup]) {
    return (
      <div className="flex min-h-screen">
        {/* background gradient color  */}
        <div className="fixed inset-0 bg-[radial-gradient(circle,white_0%,black_100%)] -z-10"></div>
        <Sidebar
          groupNames={groupNames}
          selectedGroup={selectedGroup}
          onSelectGroup={setSelectedGroup}
        />
        <main className="flex-1 p-6 overflow-auto">
          <p className="text-gray-500">
            No components available in this group.
          </p>
        </main>
      </div>
    );
  }

  const isModalGroup = selectedGroup.toLowerCase().includes("modal");

  return (
    <div className="flex min-h-screen ">
      {/* background gradient color  */}
      <div className="fixed inset-0 z-[-10] bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="w-12">
        <Sidebar
          groupNames={groupNames}
          selectedGroup={selectedGroup}
          onSelectGroup={setSelectedGroup}
        />
      </div>

      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl text-white font-bold mb-4 capitalize">{selectedGroup}</h1>

        {groupedUIComponents[selectedGroup].map((item, idx) => (
          <ComponentPreview
            key={idx}
            title={item.title}
            component={() =>
              isModalGroup ? (
                <item.component
                  isOpen={true}
                  onClose={() => {}}
                  title={item.title}
                  content={`This is a preview of ${item.title}`}
                />
              ) : (
                <item.component />
              )
            }
            code={item.code}
          />
        ))}
      </main>
    </div>
  );
};

export default Library;
