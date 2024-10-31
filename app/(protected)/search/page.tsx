"use client"
import SearchBar from "../_componentes/searchbar"
import { FollowCard } from "../_componentes/followCard"
 
 
const SearchPage = () => {
   return(
       <>
        <h2>Busacador...</h2>
        <div className="flex flex-col space-y-4">
        <SearchBar />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />

        </div>
       </>
   )
}

export default SearchPage