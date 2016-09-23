var React=require('react')

var Display=React.createClass({
getInitialState:function(){
  return ({data:[],url:"http://localhost:8080/movie/favmovie"})
},
  CreateAjax:function()  //search the movie
  {
    $.ajax({//$ is used to define or access jquery
      url: this.state.url,
      dataType: 'json',
      type: 'POST',
      data: this.props.search1,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render:function(){

    return(
      <div className="content">
       <div className="row" >
            <div className="col-sm-3">
              <div className="thumbnail">
              <img src={this.props.search1.Poster} alt="image"/>

               </div>
            </div>
            <div className="col-sm-9">
              <div className="list-group">
                <h3 className="list-group-item-heading">Movie Title :{this.props.search1.Title}</h3>
                <h3 className="list-group-item-text">Year:{this.props.search1.Year}</h3>
                <h3 className="list-group-item-text">Id:{this.props.search1.imdbID}</h3>
                <button type="submit" className="btn btn-default" onClick={this.CreateAjax} >add</button>

              </div>
           </div>
        </div>
      </div>

    )

    }

})
module.exports=Display;
