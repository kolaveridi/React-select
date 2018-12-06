import React, { Component } from 'react';
import './styles.css';
 export default class SelectBox extends React.Component{
    state={
        items:this.props.items || [],
        showitems:false,
        selectedItem:this.props.items && this.props.items[0]

    }
   dropDown=()=>{
    this.setState((currentState)=>({
        showItems:!currentState.showItems
      }));
   }
   selectedItem=(item)=>{
     console.log('item',item);
     this.setState({
       selectedItem:item,
       showItems:false  
     });
   }

    render() {
    
        return (
        <div className="select-box--box"> 
          <div className="select-box--container">
            <div className="select-box--selected-item">
             
            <div
                className="select-box--arrow"
                onClick={()=>this.dropDown()}
             >
             </div>
             {this.state.selectedItem.value} 

            <span
              className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}
            />
          </div>

          <div
            style={{display: this.state.showItems ? 'block' : 'none'}}
            className="select-box--items"
          >
            {
              this.state.items.map(item => 
              <div 
                key={item.id}
                onClick={()=>this.selectedItem(item)}
                className={this.state.selectedItem===item ?'selected':''}
                >
                { item.value }
              </div>)
            }
            </div>

          </div>
         </div> 
        );        
      }
    }
