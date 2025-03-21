export function SelectedMovie({ selectedOption, onChange }) {
  const movies = [
    { title: "Avatar", year: "2009", director: "James Cameron" },
    { title: "Inception", year: "2010", director: "Christopher Nolan" },
    { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
    {
      title: "The Shawshank Redemption",
      year: "1994",
      director: "Frank Darabont",
    },
    { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
    { title: "Parasite", year: "2019", director: "Bong Joon-ho" },
  ];

  // refactor โดยใช้ .map() เพื่อแสดงรายการหนังที่เลือก
  const handleSelectedMovieChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <h6 className="pb-4">
        เลือกหนังที่คุณชอบ <span className="text-red-600">*</span>
      </h6>
      {movies.map((item) => {
        return (
          <div
            className="flex flex-row gap-2"
            key={`${item.title}(${item.year})`}
          >
            <label>
              <input
                type="radio"
                name="option"
                className="w-4 h-4 bg-black border-black"
                value={item.title}
                checked={selectedOption === item.title}
                onChange={handleSelectedMovieChange}
              />
              <div className="flex flex-col">
                <div>
                  {item.title} ({item.year})
                </div>
                <div className="text-gray-500">Director: {item.director}</div>
              </div>
            </label>
          </div>
        );
      })}
    </>
  );
}
