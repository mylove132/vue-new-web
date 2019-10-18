const base = {
    login : '/api/user/login',
    typeUrl:'/api/common/platform',
    requestTypeUrl:'/api/common/reqeustType',
    protocolUrl:'/api/common/protocol',
    projectUrl: '/api/project/',
    userUrl:'/api/user/',
    testUrl: '/api/common/testRequest',
    scriptUrl:'/api/script/',
    dubboServer:'/api/dubbo/service',
    dubboTest:'/api/dubboTest',
    historyUrl:'/api/history/',
    reportUrl:'/api/report/',
    roleUrl:"/api/common/roles",
    listRoleUrl:"/api/common/roleList",
    generateReportUrl:"/api/common/generateReport",
    logUrl:'/api/common/watchLog',
    watchReport:"/api/common/watchReport",
    report:"/html",
    execScriptUrl:'/api/common/execScript',
    findExecResult:"/api/common/findResult",
    reportDownload:'/api/common/download',
    taskUrl:"/api/scheduleJob",
    articleUrl:"/api/article",
    checkCronUrl:"/api/common/checkCron",
    imgUrl:"/api/common/upload",
    categoryurl:"/api/category",


    //系统环境url
    envUrl:'/api/common/env',

    //目录url
    catalogUrl:"/api/catalog",
    //搜索操作url
    searchKeyword:'/api/search/keyword',
    searchModuleByEnvId:'/api/search/moduleByEnvId',
    searchModuleByProjectId:'/api/search/moduleByProjectId',
    searchModuleByProjectIdAndEnvId:'/api/search/moduleByProjectIdAndEnvId',
    //模块操作url
    getModuleByProjectId:"/api/case/moduleListByProjectId",
    casLogin:"/api/case/caslogin",
    casProject:"/api/case/project",
    casModule:"/api/case/module",
    addCase:"/api/case/addCase",
    wsUrl : 'ws://127.0.0.1:8000/ws/deploy/tasks/'
}

export default base;