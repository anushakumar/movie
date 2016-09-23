var React=require("react");
var ReactDOM=require("react-dom");


var Search=React.createClass({

  createAjax: function()//created
  {
        var query    = ReactDOM.findDOMNode(this.refs.query).value;
        var URL      = 'http://omdbapi.com/?s=' + query;
        this.props.s1data(URL)
    },

  render:function(){
    return(
      <div>
      <input
          type="text"
          placeholder="search for movie"
          ref="query"

          />

			<button type="submit" className="btn btn-default" onClick={this.createAjax} >submit</button>


         </div>
        )
  }
})
module.exports=Search;
