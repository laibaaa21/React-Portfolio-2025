import React from 'react';

const Education = () => {
  return (
    <section id="education" className="p-8 bg-gray-100 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Education</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">BS Computer Science</h3>
          <p className="text-sm text-gray-700">Information Technology University (ITU), Lahore</p>
          <p className="text-sm text-gray-600">Expected Graduation: 2027</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">A-levels</h3>
          <p className="text-sm text-gray-700">Lahore Grammar School</p>
          <p className="text-sm text-gray-600">2021 – 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
