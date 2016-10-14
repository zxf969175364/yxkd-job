/**
 * Created by huangjun on 16/6/8.
 */



module.exports = {
  getSuccess: () => {
    return {
        res: 'SUCCESS',
        data: {}
    }
  },
  getFail: () => {
    return {
      res: 'FAIL',
      error: {
        code: 500,
        message: '错误'
      }
    }
  },
  getWarning: () => {
    return {
      res: 'WARNING',
      error: {
        code: 500,
        message: '警告'
      }
    }
  },
      result: {
      SUCCESS: {
        res: 'SUCCESS',
          data: { }
      },
      FAIL: {
        res: 'FAIL',
          error: {
          code: 500,
            message: '错误'
        }
      },
      WARNING: {
        res: 'WARNING',
          error: {
          code: 500,
            message: '警告'
        }
      }
    },
    resData: {
      pageSize: 10,
        page: 1,
          total: 0,
            items: []
    },
    DELETE_SUCCESS: '删除数据成功'
  }
