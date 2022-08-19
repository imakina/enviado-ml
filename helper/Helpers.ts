import { useRouter } from "next/router";

export function getGrant() : string {

    const router = useRouter()
    const { code } = router.query
    return parseGrant(code);

}
//TODO refactor el grant
export function parseGrant(code : string | string [] | undefined) : string {
    return  (typeof(code) == "string")?code:"";
}