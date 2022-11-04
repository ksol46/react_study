import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  /*
  // 1. 컴포넌트가 렌더링이 될 때 마다 실행
  useEffect(() => {
    console.log("렌더링이 완료되었습니다");
    console.log({ name, nickname });
  });
*/
  /*
  // 2. 맨 처음 렌더링 될 때만 실행되고,
  //업데이트 될 때는 실행되지 않음
  useEffect(() => {
    console.log("렌더링이 완료되었습니다");
    console.log({ name, nickname });
  }, []);
  // 빈문자를 만들어준다.
*/
  /*
  //3. 특정 값이 변경될때만 호출
  useEffect(() => {
    console.log("렌더링이 완료되었습니다");
    console.log({ name, nickname });
  }, [name]);
*/
  /*
//4. 뒷정리 함수: 컴포넌트가 업데이트 되기 전에 실행된다.
  useEffect(() => {
    console.log("effect");
    console.log(name);

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);
  */

  //name을 변경시킴
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  //nickname을 변경시킴
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
