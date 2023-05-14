import { Link } from 'react-router-dom';
/* eslint-disable */

const Article = ({ title, image, id }) => {
  return (
    <>
      <article className='article-box'>
        <div className='article'>
          <Link to={`article/${id}`}>
            <div className='article-image'>
              <img src={image} alt='' />
            </div>
          </Link>

          <div className='article-info'>
            <h1>{title}</h1>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article;
