import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './styles'

const ProductCardSkeleton = () => {
  return (
    <S.Card whileHover={{ scale: 1.1 }}>
      <div className="content">
        <S.Photo>
          <Skeleton height={138} width={'100%'} />
        </S.Photo>
        <S.MainInfo>
          <Skeleton height={28} width={100} />
          <Skeleton height={28} width={80} />
        </S.MainInfo>
        <S.Description>
          <Skeleton count={2} height={10} width={185} />
        </S.Description>
      </div>
      <S.Button>
        <Skeleton height={16} width={100} />
      </S.Button>
    </S.Card>
  )
}

export default ProductCardSkeleton
