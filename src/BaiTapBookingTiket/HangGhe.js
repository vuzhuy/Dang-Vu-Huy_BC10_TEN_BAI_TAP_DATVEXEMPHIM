import React, { Component } from "react";
import {connect} from 'react-redux'
import {datGheAction} from '../Actions/DatVeAction';

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
    //Ghế đã được đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
    // Trạng thái ghế đang đặt
        let cssGheDangDat ='';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex
      (gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1){
        cssGheDangDat = 'gheDangChon'
      }

      return (
        <button onClick={() => {this.props.datGhe(ghe) }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };
  rederHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left ml-5 mt-1" style={{ fontSize: 30 }}>
        {this.rederHangGhe()}
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        datGhe: (ghe) => {
            dispatch (datGheAction(ghe))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (HangGhe);