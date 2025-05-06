import { useState } from "react";

export default function FileUploadForm() {
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    // Show preview for the first image file
    const imageFile = selectedFiles.find((f) => f.type.startsWith("image/"));
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);

    const imageFile = droppedFiles.find((f) => f.type.startsWith("image/"));
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Files submitted: ${files.map((f) => f.name).join(", ")}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">📎 File Upload Inputs</h2>

      {/* Basic File Input */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Select File</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Multi-file Upload */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Upload Multiple Files</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Drag & Drop Upload */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 hover:bg-gray-50 transition cursor-pointer"
      >
        <p>Drag & Drop files here or click the input above</p>
      </div>

      {/* Image Preview */}
      {imagePreview && (
        <div className="pt-4">
          <p className="text-sm font-medium text-gray-600 mb-1">Image Preview:</p>
          <img
            src={imagePreview}
            alt="Preview"
            className="w-48 h-auto border rounded shadow"
          />
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Selected Files:</p>
          <ul className="text-sm list-disc pl-5 space-y-1">
            {files.map((file, idx) => (
              <li key={idx}>
                {file.name} ({Math.round(file.size / 1024)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Upload Files
        </button>
      </div>
    </form>
  );
}
