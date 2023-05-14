import React from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';

import { db } from '../firebase';

function WithArticleData(Component) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				artticles: []
			};
		}

		componentDidMount() {
			const queryColection = query(collection(db, 'articles'));
			this.unsubscribe = onSnapshot(queryColection, querySnapshot => {
				const articlesArray = [];
				querySnapshot.forEach(doc => {
					articlesArray.push({ ...doc.data(), id: doc.id });
				});
				this.setState({ artticles: articlesArray });
			});
		}

		componentWillUnmount() {
			this.unsubscribe();
		}

		render() {
			return <Component artticles={this.state.artticles} {...this.props} />;
		}
	};
}

export default WithArticleData;
