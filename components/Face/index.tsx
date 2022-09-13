interface faceProps {
  id: string,
  name: string
}

export const Face = ({id, name}: faceProps) => {
  return (
    <div> ID: {id} this is {name} the face</div>
  )
}