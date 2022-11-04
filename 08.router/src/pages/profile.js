import { useParams } from "react-router-dom";

const data = {
  sol: {
    name: "김솔",
    description: "학생",
  },
  youngjin: {
    name: "김영진",
    description: "안경사",
  },
};

import React from "react";

const Profile = () => {
  const params = useParams;
  const profile = data[params.username];

  return (
    <div>
      <h1>프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;

//url 파라메터 : 주로 id, 이름을 사용해서
//쿼리스트링 : 키워드 검색, 페이지네이션, 정렬 방식 등
