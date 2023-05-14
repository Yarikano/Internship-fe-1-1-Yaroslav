import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import WithArticleData from './WithArticlesData';

import Loading from './Loading';

const SingleArticle = ({ artticles }) => {
	const [article, setArticle] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const articleId = artticles.find(item => String(item.id) === id);
		setArticle(articleId);
	}, [artticles, id]);
	return (
		<>
			{article ? (
				<article className='single-box'>
					<div className='title'>
						<h1>{article.title}</h1>
					</div>
					<div className='img'>
						<img src={article.imageUrl} alt='' />
					</div>
					<div className='description'>
						<p>{article.description}</p>
					</div>
					<div className='comment'>
						<div className='comment-bg'>
							<h2>Experts Comment</h2>
							<p>{article.expertComment}</p>
						</div>
					</div>
				</article>
			) : (
				<Loading />
			)}
		</>
	);
};

export default WithArticleData(SingleArticle);
