import useNavigation from "../../hooks/use-nagivation";

export default function Route({ path, children }) {
  const { currentPath } = useNavigation();
  if (path === currentPath) {
    return children;
  }

  return null;
}
