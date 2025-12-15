import {Redirect, Stack} from "expo-router";

export default function LayoutProtegido() {
    const logado = true;

    if (logado) {
        return  <Redirect href="/login"/>;
    }

    return (
        <Stack></Stack>
    );
}