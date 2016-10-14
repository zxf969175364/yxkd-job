import fs from 'fs'
export default function () {
    //服务层初始化
    G.job = {};
    var paths = fs.readdirSync(G.path.job);

    for (var path of paths) {
        let jobPath = G.path.job + '/' + path;
        if (fs.existsSync(jobPath)) {
            return require(jobPath).default();
        }
    }

}