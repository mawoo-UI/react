import { Component } from "react"
import Notification from "./Notification";


const reservedNotifications = [
  {message: "안녕하세요, 오늘 일정을 알려드립니다."},
  {message: "점심 식사 시간입니다."},
  {message: "이제 곧 미팅이 시작됩니다."}
];

var timer;
class NotificationList extends Component {
   constructor (props) {
    super(props);
    this.state = {notifications: [], count:0};
   }
   //생성자 정의 후
   componentDidMount() {
    const {notifications} = this.state;

    timer = setInterval(() => {
      //브라우저가 꺼지거나 자원이 반납될 때까지 계속
      if (this.state.notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        // [ {} ]
        this.setState({...this.state, notifications});
      } 
      else {
        clearInterval(timer);
      }
    }, 1000);
   }

   componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
      //타이머가 한번이라도 실행되었다면 해제하겠다 라는것.
    }
   }
   render() {
    return (
      <div>
        {/* {this.state.notifications.map((notification)=> {
          return <Notification message={notification.message} />
        })} */}
        {this.state.notifications.map((noti, i) => <Notification key={i} {...noti} />)}
      </div>
    );
   }
}
export default NotificationList;