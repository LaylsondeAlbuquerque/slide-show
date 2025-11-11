import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

/**
 * Diretiva Standalone para Detecção de Swipe (Esquerda/Direita).
 *
 * Esta diretiva escuta os eventos nativos de toque (touchstart, touchend)
 * para detectar um gesto de swipe horizontal. Ela emite eventos
 * personalizados (swipeleft) e (swiperight) que podem ser usados
 * no template, substituindo a necessidade do HammerJS.
 *
 * @example
 * <div (swipeleft)="onNext()" (swiperight)="onPrev()">...</div>
 */
@Directive({
  selector: '[swipeleft], [swiperight]', // Seletor inteligente
  standalone: true
})
export class SwipeDirective {

  /**
   * Limite mínimo de pixels que o usuário deve arrastar
   * para que o gesto seja considerado um 'swipe'.
   */
  private readonly SWIPE_THRESHOLD = 50; // 50 pixels

  /**
   * Ponto de início do toque no eixo X.
   */
  private startX = 0;

  /**
   * Ponto final do toque no eixo X.
   */
  private endX = 0;

  /**
   * Evento emitido quando um swipe para a esquerda é detectado.
   */
  @Output() swipeleft = new EventEmitter<void>();

  /**
   * Evento emitido quando um swipe para a direita é detectado.
   */
  @Output() swiperight = new EventEmitter<void>();

  /**
   * Escuta o início do toque no elemento.
   * Armazena a coordenada X inicial.
   * @param event O evento de toque (TouchEvent).
   */
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.startX = event.changedTouches[0].screenX;
  }

  /**
   * Escuta o fim do toque no elemento.
   * Armazena a coordenada X final e calcula a diferença.
   * @param event O evento de toque (TouchEvent).
   */
  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.endX = event.changedTouches[0].screenX;
    this.handleSwipeGesture();
  }

  /**
   * Calcula a diferença entre o início e o fim do toque.
   * Emite os eventos (swipeleft) ou (swiperight) se o
   * limite (SWIPE_THRESHOLD) for ultrapassado.
   */
  private handleSwipeGesture(): void {
    const diffX = this.endX - this.startX;

    // Movimento para a ESQUERDA (startX > endX)
    // O 'diffX' é negativo
    if (diffX < -this.SWIPE_THRESHOLD) {
      console.log('Swipe Left Detectado');
      this.swipeleft.emit();
    }

    // Movimento para a DIREITA (endX > startX)
    // O 'diffX' é positivo
    if (diffX > this.SWIPE_THRESHOLD) {
      console.log('Swipe Right Detectado');
      this.swiperight.emit();
    }

    // Reseta os valores (opcional, mas boa prática)
    this.startX = 0;
    this.endX = 0;
  }
}