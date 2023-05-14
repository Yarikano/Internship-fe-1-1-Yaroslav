import WithArticleData from './WithArticlesData';

import Article from './Article';

const ListArticles = ({ artticles }) => {
	return (
		<div className='articles-box'>
			{artticles.map(item => (
				<Article
					key={item.id}
					title={item.title}
					description={item.description}
					image={item.imageUrl}
					expertComment={item.expertComment}
					id={item.id}
				/>
			))}
		</div>
	);
};

export default WithArticleData(ListArticles);
