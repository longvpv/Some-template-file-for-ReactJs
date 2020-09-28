import { makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles({
  root: {
    overflow: 'auto'
  },
  title: {
    fontFamily: "Quicksand",
    fontSize: "14px",
    fontWeight: 'bold',
    paddingLeft: "6px",
    paddingTop: "6px",
    margin: '0'
  },

});

function Process() {
  const classes = useStyles()
  return (
    <div>
      <div className="row m-0 p-0">
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center relative" style={{ height: '240px' }}>
          <img src="/images/processIcon/sys.png" alt="" />
          <p className={classes.title}>Thiết lập công ty</p>
          <p className={classes.title}>SYS005</p>
          <div className="vl"></div>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center" style={{ height: '240px' }}>
          <img src="/images/processIcon/dep.png" alt="" />
          <p className={classes.title}>Thiết lập phòng ban</p>
          <p className={classes.title}>SYS006</p>
          <div className="vl"></div>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center" style={{ height: '240px' }}>
          <img src="/images/processIcon/bank.png" alt="" />
          <p className={classes.title}>Tạo ngân hàng công ty</p>
          <p className={classes.title}>SYS507</p>
          <div className="vl"></div>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center" style={{ height: '240px' }}>
          <img src="/images/processIcon/staf.png" alt="" />
          <p className={classes.title}>Quản lý nhân viên</p>
          <p className={classes.title}>SYS010</p>
          <div className="vl"></div>
        </div>
      </div>

      <div className="row border-top">
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center" style={{ height: '240px' }}>
          <img src="/images/processIcon/workflow.png" alt="" />
          <p className={classes.title}>Chỉ định NV vào phòng ban</p>
          <p className={classes.title}>SYS504</p>

        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center" style={{ height: '240px' }}>
          <img src="/images/processIcon/stafcontrol.png" alt="" />
          <p className={classes.title}>Thiết lập lớp người dùng</p>
          <p className={classes.title}>SYS009</p>

        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center" style={{ height: '240px' }}>
          <img src="/images/processIcon/staftogroup.png" alt="" />
          <p className={classes.title}>Thiết lập NV vào lớp người dùng</p>
          <p className={classes.title}>SYS008</p>

        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center" style={{ height: '240px' }}>
          <img src="/images/processIcon/changepass.png" alt="" />
          <p className={classes.title}>Thay đổi mật khẩu</p>
          <p className={classes.title}>SYS012</p>

        </div>
      </div>
      <div className="row mt-4 ml-5 pl-5">
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/bar-chart 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Thiết lập đơn vị SP</p>
            <p className={classes.title}>SYS003</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/marketing-strategy 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Thiết lập bảng quy đổi</p>
            <p className={classes.title}>SYS004</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/rocket 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Thiết lập máy chủ</p>
            <p className={classes.title}>SYS022</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/timeline 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Quản lý barcode SP</p>
            <p className={classes.title}>MIS050</p>
          </div>
        </div>
      </div>
      <div className="row ml-5 pl-5">
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/pc 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Tạo mã chặn</p>
            <p className={classes.title}>SYS501</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/bar-chart 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Tạo mã phí</p>
            <p className={classes.title}>SYS601</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/bar-chart 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Nội dung phí</p>
            <p className={classes.title}>SYS602</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/visualization 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Thiết lập người dùng xóa chặn</p>
            <p className={classes.title}>MIS052</p>
          </div>
        </div>
      </div>
      <div className="row ml-5 pl-5">
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/gears 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Thiết lập quy trình chung</p>
            <p className={classes.title}>SYS812</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/translate 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Ngôn ngữ</p>
            <p className={classes.title}>SYS600</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/promotion 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Thiết lập thông báo</p>
            <p className={classes.title}>SYS020</p>
          </div>
        </div>
        <div className="col-md-3 d-flex  align-items-center" style={{ height: '120px' }}>
          <img src="/images/processIcon/process 1.png" alt="" />
          <div className="ml-3">
            <p className={classes.title}>Kiểm tra dữ liệu thay đổi</p>
            <p className={classes.title}>MIS025</p>
          </div>
        </div>
      </div>
      <style jsx>{`
          .relative {
            position: relative;
          }
          .vl {
            position: absolute;
            bottom: -50px;
            border-left: 1px solid #D8D8D8;
            height: 100px;
          }
          
          
        `}</style>
    </div>
  )
}

export default Process
