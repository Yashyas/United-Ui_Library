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
        <div className="fixed inset-0 bg-gradient-to-br to-white via-blue-300 from-purple-400 -z-10"></div>
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
      <div className="fixed inset-0 z-[-10] animate-gradient bg-rainbow-gradient"></div>

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
      <style jsx>{`
        .bg-rainbow-gradient {
          background: linear-gradient(
            -45deg,
            #ff9a9e,
            #fad0c4,
            #fbc2eb,
            #a6c1ee,
            #84fab0,
            #8fd3f4,
            #c3cfe2,
            #fccb90,
            #e0c3fc,
            #f6d365,
            #fd6585,
            #a18cd1,
            #fbc2eb,
            #ff9a9e
          );
          background-size: 1600% 1600%;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradientShift 30s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Library;
