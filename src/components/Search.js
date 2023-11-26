import React, { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { callAPI } from '../utils/callApis'
import { useNavigate, createSearchParams } from 'react-router-dom'

const Search = () => {
  const [suggestions, setSuggestions] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')
  const navigate = useNavigate()

  const searchCategory = (category) => { 
    navigate({
      pathname: 'search',
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()

    navigate({
      pathname: 'search',
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    })
    setCategory('All')
    setSearchTerm('')
  }

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults.data)
    })
  }

  useEffect(() => {
    getSuggestions()
  }, [])

  return (
    <div className='w-[840px]'>
      <div className='flex items-center h-10'>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className='h-[100%] text-black outline-none hidden'
        >
          <option>All</option>
          <option>ĐỒ chơi</option>
          <option>Mặt nạ</option>
          <option>Phụ kiện</option>
          <option>Nước hoa</option>
          <option>Giày</option>
          <option>Tinh dầu</option>
          <option>Hình xăm</option>
          <option>Quần áo</option>
          <option>Sức khỏe</option>
          <option>Điện tử</option>
          <option>Bình xịt</option>
        </select>
        <input
          type='text'
          className='flex items-center w-[100%] h-[100%] text-black rounded-[3px]  placeholder:text-[#BCBBA1] shadow-sm outline-none pl-3'
          placeholder='Nhập tên sản phẩm'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className='bg-shopeeclone-orange relative right-[59px] h-[85%] rounded-[3px] w-[60px] flex items-center justify-center'
          onClick={onHandleSubmit}
        >
          <FiSearch size={18} className='' />
        </button>
      </div>
      {suggestions && (
        <>
          <div className='bg-white text-black w-[784px] z-40 absolute'>
            {suggestions
              .filter((suggestion) => {
                const currentSearchTerm = searchTerm.toLowerCase()
                const title = suggestion.title.toLowerCase()
                return (
                  currentSearchTerm &&
                  title.startsWith(currentSearchTerm) &&
                  title !== currentSearchTerm
                )
              })
              .slice(0, 10)
              .map((suggestion) => (
                <div key={suggestion.id} onClick={() => setSearchTerm(suggestion.title)}>
                  {suggestion.title}
                </div>
              ))}
            <div className='flex bg-shopeeclone-orange text-white text-[13px] pt-[3px] gap-[23px] cursor-pointer'>
              <div className='' onClick={() => searchCategory("Dép")}>Dép</div>
              <div className='' onClick={() => searchCategory("Đồ chơi")}>Đồ chơi</div>
              <div className='' onClick={() => searchCategory("Mặt nạ")}>Mặt nạ</div>
              <div className='' onClick={() => searchCategory("Phụ kiện")}>Phụ kiện</div>
              <div className='' onClick={() => searchCategory("Nước hoa")}>Nước hoa</div>
              <div className='' onClick={() => searchCategory("Giày")}>Giày</div>
              <div className='' onClick={() => searchCategory("Tinh dầu")}>Tinh dầu</div>
              <div className='' onClick={() => searchCategory("Hình xăm")}>Hình xăm</div>
              <div className='' onClick={() => searchCategory("Quần áo")}>Quần áo</div>
              <div className='' onClick={() => searchCategory("Sức khỏe")}>Sức khỏe</div>
              <div className='' onClick={() => searchCategory("Điện tử")}>Điện tử</div>
              <div className='' onClick={() => searchCategory("Bình xịt")}>Bình xịt</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Search
