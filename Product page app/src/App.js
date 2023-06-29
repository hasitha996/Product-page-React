import logo from './logo.svg';
import classes from './App.module.css';
import ProdutPreview from './component/ProdutPreview';
import Topbar from './component/Topbar';
import ProductItem from './component/ProductItem';
import { Component } from 'react';
import ProductData from './component/ProductData';

class  App extends Component {
  state={
    ProductData:ProductData,
    showHartBeet:false,
    previewimg:0,
    feturebtnPos:0
    
  }
  onColorOptionClick = (pos) =>{
    // const updatePreviewImage =this.state.ProductData.colorOptions[pos].imageUrl;
    this.setState({previewimg:pos});
  }
  onFetureOptionClick = (pos) =>{
    let updateState=false;
    if(pos===1){
      updateState=true;
    }

    this.setState({showHartBeet:updateState,feturebtnPos:pos});
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
      <Topbar/>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProdutPreview}>
          <ProdutPreview showHartBeet={this.state.showHartBeet} 
          previewimg={this.state.ProductData.colorOptions[this.state.previewimg].imageUrl}
          feturepos={this.state.feturepos}
          />
        </div>
        <div className={classes.ProductData}>         
        <ProductItem data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick} 
        onFetureOptionClick={this.onFetureOptionClick} previewimgPos={this.state.previewimg} feturebtnPos={this.state.feturebtnPos}/>
        </div>

      </div>
    </div>
  );
}
  
}

export default App;
