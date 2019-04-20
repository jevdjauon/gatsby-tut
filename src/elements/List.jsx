import React from "react"
import { typography } from "../theme.config"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "../elements/Icon"

const ListContainer = styled.div`
  box-sizing: border-box;
  padding: 0 2em;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ListItem = styled.li`
  padding: 0.25em 0;
  a {
    ${typography.paragraph};
    text-decoration: none;
    color: inherit;
    opacity: 0.85;
    transition: opacity 0.3s ease;
  }

  a:hover {
    opacity: 1;
  }
`

const ListTitle = styled.strong`
  margin-bottom: 1em;
  text-transform: uppercase;
  font-size: 0.9em;
`

const List = props => {
  return (
    <ListContainer>
      <ListTitle>{props.title}</ListTitle>
      <ListWrapper>
        {props.items.map(item => (
          <ListItem key={item.to}>
            <Link to={item.to}>
              {item.icon ? (
                <Icon src={item.icon} text={item.text} size={1} />
              ) : (
                item.text
              )}
            </Link>
          </ListItem>
        ))}
      </ListWrapper>
    </ListContainer>
  )
}

export default List
