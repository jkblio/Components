import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 4:45PM" 
					message="Nice blog!" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timeAgo="Today at 3:30AM" 
					message="Cool blog!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					timeAgo="Yesterday at 6:00PM" 
					message="Awesome" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));