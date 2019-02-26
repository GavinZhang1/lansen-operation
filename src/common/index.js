
export default {
  setPage:function(conf,page){
      conf['tableConfig'].pageSize = page;
      console.log('conf = ',conf)
      console.log('page = ',page)
  },
  setPageSize:function(conf,page){
    console.log('conf = ',conf)
    console.log('page = ',page)
    conf['tableConfig'].pageSize = page;
  },
  lsAjax : function(conf,page){
    conf['tableConfig'].pageSize = page;
  },
  delRow : function(config){
    $.ajax({
      url:config.url,
      type:config.type||'GET',
      data:{

      }
    })
  }
}
