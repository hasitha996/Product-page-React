import React from "react";
import classes from './ProdutPreview.module.css';
const ProdutPreview = (props) => {
    const curhoures = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const curMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return (
        <div className={classes.ProdutPreview}>
            <img src={props.previewimg} />
            <div className={classes.FetureData}>

                {
                    props.showHartBeet ?
                        <div className={classes.HartrateSelect}>
                            <i class="fa fa-heartbeat" aria-hidden="true"></i>
                            <p>78</p>
                        </div>
                    :
                        <div className={classes.TimeSelection}>
                            <p>{`${curhoures}:${curMinutes}`}</p>
                        </div>
                }




            </div>
        </div>

    );


}

export default ProdutPreview;