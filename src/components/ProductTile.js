import React from 'react';

export default function ProductTile(props){
	console.log(props.product);
	return(
			<div className="col-6 col-sm-4">
			<div className="product-tile">
			<div className="image-container">
			<a herf={props.product.imageurl}>
			<img
				src= {props.product.imageurl}
				alt="alt of image" title="title is nothing"
					width="200" height="200" />
			    </a>
			</div>
			<div className="tile-body">
			<div className="pdp-link">
		    <a className="link" href={props.product.imageurl}>{props.product.name}</a>
		</div>
		<div className="price">
	     <span>
	    <span className="sales">
	            <span className="value" content={props.product.price}>{props.product.price}
	        </span>
	    </span>
	</span>
	    </div>
			</div>
			</div>
			</div>

			
			
			);
}
