import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Saytimga xush kelibsiz.</h1>
        <p className="text-xl text-gray-700 mb-6">Veb-saytimni asosiy sahifasi.</p>
        
        <p className="text-lg text-gray-600">
          Bizning saytda siz eng so'nggi yangiliklarni, mahsulotlarimizni va xizmatlarimizni topishingiz mumkin. Biz har doim mijozlarimizga eng yaxshi tajribani taqdim etishga harakat qilamiz.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Biz bilan bog'laning
          </button>
          <button className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Boshqa sahifalar
          </button>
        </div>
      </div>
    </div>
  );
}
