import React from "react";
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    // console.log(props.previewimgPos)
   const colorOptions=props.data.colorOptions.map((item,pos) => {
    const classArr=[classes.ProductImage];
    if(pos===props.previewimgPos){
        classArr.push(classes.SelectedProdutimg);
    }
    return(
        <img key={pos} className={classArr.join(' ')} src={item.imageUrl} onClick={() => props.onColorOptionClick(pos)} alt={item.styleName} />
    );
   });

   const FeatureList = props.data.featureList.map((item,pos)=>{
    const classFArr=[classes.FeatureItem];
    if(pos===props.feturebtnPos){
        classFArr.push (classes.SelectedFeatureItem);
    }
    return(
        <button className={classFArr.join(' ')} onClick={() => props.onFetureOptionClick(pos)}> {item}</button>
    );
   })
    return (
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.Produtparagraph}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOptions}            
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
             {FeatureList}
            
            </div>
            <div>
                <button className={classes.BuyNowBtn}>Buy Now</button>
            </div>

        </div>

    );


}

export default ProductItem;