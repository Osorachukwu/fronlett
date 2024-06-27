import React from "react";
import { ArrowRight } from "lucide-react";
import vidOne from "../../assets/Frame 49268.svg";
import bookOne from "../../assets/Frame 49275.svg";

function BlogAndResources() {
  const vids = [{ vid: vidOne }, { vid: vidOne }, { vid: vidOne }];

  const books = [
    {
      title: "Top 10 Most Powerful startup",
      desc: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
      book: bookOne,
    },
    {
      title: "Top 10 Most Powerful startup",
      desc: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
      book: bookOne,
    },
    {
      title: "Top 10 Most Powerful startup",
      desc: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
      book: bookOne,
    }
  ];


  return (
    <div className="px-60">
      <div className="text-center space-y-3 mb-10">
        <p className="font-bold text-3xl">Blogs & Resources</p>
      </div>

      <div className="flex gap-5 mb-6">
        {vids.map((vid) => (
          <div>
            <img src={vid.vid} alt="" />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-5 text-sm mb-8">
        {books.map((book, i) => (
          <div key={i} className="flex">
            <div className="space-y-2">
              <p className="font-semibold">{book.title}</p>
              <p>{book.desc}</p>
            </div>
            <img src={book.book} alt="" className="h-16"/>
          </div>
        ))}
      </div>

      <div>
        <a href="" className="flex gap-1 justify-center items-center underline">
          <p>Beacome A Service Incubator</p>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}

export default BlogAndResources;
