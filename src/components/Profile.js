import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Location = styled.p`
  color: gray;
  font-weight: 500;
  margin: 0;
  padding-bottom: 30px;
`;
const Tag = styled.p`
  color: gray;
  font-weight: 500;
  margin: 0;
  padding-bottom: 10px;
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 10px;
  padding-top: 30px;
  margin: 0;
`;
const ProfileCard = styled.div`
  display: inline-block;
  width: 300px;
  border-radius: 10px;
  border: 1px solid rgba(112, 128, 144, 0.1);
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  padding-top: 20px;
`;

const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Stat = styled.li`
  list-style-type: none;
  width: 100px;
  border: 1px solid rgba(112, 128, 144, 0.1);
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(112, 128, 144, 0.2);
`;

const FirstStat = styled(Stat)`
  border-bottom-left-radius: 10px;
`;

const LastStat = styled(Stat)`
  border-bottom-right-radius: 10px;
`;

const Label = styled.span`
  display: block;
  padding-bottom: 10px;
  color: gray;
  font-weight: 500;
`;

const Quantity = styled.span`
  font-weight: 800;
`;

export default function Profile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <ProfileCard>
      <Description className="description">
        <Avatar src={avatar} alt={name} className="avatar" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <FirstStat>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </FirstStat>
        <Stat>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </Stat>
        <LastStat>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </LastStat>
      </Stats>
    </ProfileCard>
  );
}

Profile.defaultProps = {
  avatar:
    "https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
