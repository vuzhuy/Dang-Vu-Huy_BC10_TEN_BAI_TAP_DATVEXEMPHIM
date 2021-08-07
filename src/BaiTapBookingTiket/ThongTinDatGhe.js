import React, { Component } from "react";
import {connect} from 'react-redux'
import {huyGheAction} from '../Actions/DatVeAction'


class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"> </button>{" "}
          <span className="text-light">Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"> </button>{" "}
          <span className="text-light">Ghế đang đặt</span>
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}>
            {" "}
          </button>{" "}
          <span className="text-light">Ghế chưa đặt</span>
        </div>
        <div className="mt-5">
          <table className="table text-light" border="3">
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat,index) => {
                return <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.soGhe.toLocaleString()}</td>
                  <td><button onClick={() =>{
                    this.props.dispatch(huyGheAction(gheDangDat.soGhe))    
                  }}>Hủy</button></td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=> {
                  return tongTien += gheDangDat.gia;
                }, 0)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat
  }
}

export default connect (mapStateToProps) (ThongTinDatGhe);