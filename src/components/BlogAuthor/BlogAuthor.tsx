import Image from 'next/image';
import React from 'react';

interface Props {
  date: string;
  reading_stats: ReadingStats;
}

const BlogAuthor = (props: Props): JSX.Element => {
  const { date, reading_stats } = props;

  return (
    <div className="row align-items-center">
      <div className="col-auto">
        <Image
          alt="Photograph of Colin Hemphill taken as he was preparing for his wedding ceremony"
          className="rounded-circle"
          height={50}
          priority
          src="/img/Colin-Wedding-Square.jpg"
          width={50}
        />
      </div>
      <div className="col">
        <div>Written by Colin Hemphill</div>
        <div>
          {date} • <em>{reading_stats.text}</em>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;
